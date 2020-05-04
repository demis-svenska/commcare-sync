from django.db import models
from django.utils.safestring import mark_safe
from apps.commcare.models import BaseModel


class ExportDatabase(BaseModel):
    name = models.CharField(max_length=100)
    connection_string = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ExportConfig(BaseModel):
    name = models.CharField(max_length=100)
    project = models.ForeignKey('commcare.CommCareProject', on_delete=models.CASCADE)
    account = models.ForeignKey('commcare.CommCareAccount', on_delete=models.CASCADE)
    database = models.ForeignKey(ExportDatabase, on_delete=models.CASCADE)
    config_file = models.FileField(upload_to='export-configs/')

    def __str__(self):
        return f'{self.name} - {self.project}'

    @property
    def last_run(self):
        return self.runs.order_by('-created_at')[0] if self.runs.exists() else None


class ExportRun(BaseModel):
    COMPLETED = 'completed'
    STARTED = 'started'
    FAILED = 'failed'
    STATUS_CHOICES = (
        (STARTED, 'started'),
        (COMPLETED, 'completed'),
        (FAILED, 'failed'),
    )
    export_config = models.ForeignKey(ExportConfig, on_delete=models.CASCADE, related_name='runs')
    completed_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=10, default='started', choices=STATUS_CHOICES)
    log = models.TextField(null=True, blank=True)

    def __str__(self):
        return f'{self.export_config.name} ({self.created_at})'

    @property
    def duration(self):
        if self.completed_at:
            return self.completed_at - self.created_at
        else:
            return None

    def get_log_html(self):
        formatted_log = str(self.log).replace('\n', '<br>') if self.log else ''
        return mark_safe(formatted_log)
