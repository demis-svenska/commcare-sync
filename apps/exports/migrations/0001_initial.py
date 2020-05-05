# Generated by Django 3.0.5 on 2020-05-05 12:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('commcare', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExportConfig',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('config_file', models.FileField(upload_to='export-configs/')),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='commcare.CommCareAccount')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ExportRun',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('completed_at', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('started', 'started'), ('completed', 'completed'), ('failed', 'failed')], default='started', max_length=10)),
                ('log', models.TextField(blank=True, null=True)),
                ('export_config', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='runs', to='exports.ExportConfig')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ExportDatabase',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('connection_string', models.CharField(max_length=100)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='exportconfig',
            name='database',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exports.ExportDatabase'),
        ),
        migrations.AddField(
            model_name='exportconfig',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='commcare.CommCareProject'),
        ),
    ]
