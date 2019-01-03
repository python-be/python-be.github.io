# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin
from datetime import datetime as dt


def get_current_date():
    now = dt.now().strftime('%Y-%m-%d %H:%M:%S')
    today = dt.strptime(now, '%Y-%m-%d %H:%M:%S')
    return today



class DateComparePlugin(Plugin):
    name = 'date-compare'
    description = u'Plugin to compare two dates.'

    def on_process_template_context(self, context, **extra):
        def test_function():
            return 'Value from plugin %s' % self.name
        context['test_function'] = test_function

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals.update(
            get_current_date=get_current_date
        )