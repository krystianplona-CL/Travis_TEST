#!/bin/bash
scp /home/mazurek/Pulpit/test.sh root@185.28.101.228:.

ssh root@185.28.101.228 mv /root/test.sh /root/plona/

ssh root@185.28.101.228 sh /root/plona/test.sh

ssh root@185.28.101.228
