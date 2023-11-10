INSERT INTO BOARD_USER VALUES (SQ_BOARD_USER.NEXTVAL , '이산하' ,'D','D','설명글',NULL,'USER',
                               'NULL',TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
INSERT INTO BOARD_USER VALUES (SQ_BOARD_USER.NEXTVAL , '두번째이산하' ,'S','S','설명글',NULL,'USER',
                               'NULL',TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);

INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL , 'SCRIPT 오류는 어떻게 없애나요' , '현재 SCRIPT 오류는 조치중에 있습니다.' , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL , '권한이 없습니다. 문구가 뜹니다.' , '회원가입을 하지 않을경우 권한이 없어 회원가입을 먼저 해주시길 바랍니다.' , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL , '화면이 깨지는 현상이 발생합니다.' , '일부 내 정보 수정화면에서 화면이 깨지는 현상이 있습니다. overflow-hidden 을 않넣었으므로 발생하는 현상으로 현재 조치중입니다.' , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);

COMMIT;