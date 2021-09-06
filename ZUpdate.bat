@ECHO OFF
@echo Started: %date% %time%

call git pull

call git add .


call git commit -m 'auto'
call git push
PAUSE
