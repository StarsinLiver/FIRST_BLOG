-- INSERT INTO BOARD_USER VALUES (SQ_BOARD_USER.NEXTVAL , '이산하' ,'D','D','설명글','USER',
--                                'NULL',TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
-- INSERT INTO BOARD_USER VALUES (SQ_BOARD_USER.NEXTVAL , '두번째이산하' ,'S','S','설명글','USER',
--                                'NULL',TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);

INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL , '질문' , '응답' , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL , '질문2' , '응답2' , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL , '질문3' , '응답3' , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);

COMMIT;