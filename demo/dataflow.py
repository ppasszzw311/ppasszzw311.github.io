# -*- coding: utf-8 -*-
"""
Created on Fri May 27 14:55:56 2022

@author: N000176682
"""

from apscheduler.schedulers.blocking import BlockingScheduler
from datetime import datetime, timedelta
from time import timezone

from Data_Scratch.data_scratch import data_export
from Modeling.model_inference import inference

def job():
    time_format="%y-%m-%d %H:%M:%S"
    data = data_export(datetime.strftime(datetime.now()-timedelta(minutes=10), time_format),
                                    datetime.strftime(datetime.now(), time_format), time_interval='10m')
    if data is not None:
        score = inference(data.loc[1])
        print(datetime.strftime(datetime.now(), time_format) + ":" + str(score[-1]))
    else:
        print(datetime.strftime(datetime.now(), time_format) + ': Calc Failed or I/O Timeout')
        
def test(start_time):
    time_format="%y-%m-%d %H:%M:%S"
    data = data_export(datetime.strftime(start_time-timedelta(minutes=10), time_format),
                                    datetime.strftime(start_time, time_format), time_interval='10m')
    if data is not None:
        score = inference(data.loc[1])
        print(datetime.strftime(datetime.now(), time_format) + ":" + str(score[-1]))
    else:
        print(datetime.strftime(datetime.now(), time_format) + ': Calc Failed or I/O Timeout')


if __name__=='__main__':
        
    freq = 10
    print('scheduler frequency:', freq)
    scheduler = BlockingScheduler(timezone="Asia/Taipei")
    scheduler.add_job(job, 'interval', minutes=freq)
    scheduler.start()
    
    #test(datetime(2022, 5, 24, 15, 0, 0))
    #test(datetime.now())