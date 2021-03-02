# Generated by Django 3.1.6 on 2021-02-17 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exports', '0016_export_config_versioning'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exportconfig',
            name='extra_args',
            field=models.TextField(blank=True, default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='multiprojectexportconfig',
            name='extra_args',
            field=models.TextField(blank=True, default=''),
            preserve_default=False,
        ),
    ]