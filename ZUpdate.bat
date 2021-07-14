@ECHO OFF
@echo Started: %date% %time%

call git pull origin master

call git add .


call git commit -m 'auto'
call git push origin master
PAUSE
