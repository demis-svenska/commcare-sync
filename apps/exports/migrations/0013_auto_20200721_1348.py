# Generated by Django 3.0.5 on 2020-07-21 11:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('exports', '0012_model_field_population_20200721_1330'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='multiprojectpartialexportrun',
            name='export_config',
        ),
        migrations.AlterField(
            model_name='exportrun',
            name='status',
            field=models.CharField(choices=[('queued', 'queued'), ('started', 'started'), ('completed', 'completed'), ('failed', 'failed'), ('skipped', 'skipped')], default='queued', max_length=10),
        ),
        migrations.AlterField(
            model_name='multiprojectexportrun',
            name='export_config',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='runs', to='exports.MultiProjectExportConfig'),
        ),
        migrations.AlterField(
            model_name='multiprojectexportrun',
            name='status',
            field=models.CharField(choices=[('queued', 'queued'), ('started', 'started'), ('completed', 'completed'), ('failed', 'failed'), ('skipped', 'skipped')], default='queued', max_length=10),
        ),
        migrations.AlterField(
            model_name='multiprojectpartialexportrun',
            name='status',
            field=models.CharField(choices=[('queued', 'queued'), ('started', 'started'), ('completed', 'completed'), ('failed', 'failed'), ('skipped', 'skipped')], default='queued', max_length=10),
        ),
    ]