@ECHO OFF
@echo Started: %date% %time%

call git pull

call git add *

echo %date%

call git commit -m 'ok'
call git push
PAUSE
