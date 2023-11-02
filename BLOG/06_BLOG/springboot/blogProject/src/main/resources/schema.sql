-- Table , 시퀀스 등 구조 정의
DROP SEQUENCE SQ_BOARD;
CREATE SEQUENCE SQ_BOARD START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_BOARD_USER;
CREATE SEQUENCE SQ_BOARD_USER START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_BOARD_FILE;
CREATE SEQUENCE SQ_BOARD_FILE START WITH 1 INCREMENT BY 1;

DROP TABLE BOARD CASCADE CONSTRAINT;
DROP TABLE BOARD_USER CASCADE CONSTRAINT;
DROP TABLE BOARD_FILE CASCADE CONSTRAINT;

CREATE TABLE BOARD_FILE
(
    FID NUMBER(5) CONSTRAINT PK_FILE PRIMARY KEY,
    FILE_DATA BLOB,
    FILE_NAME VARCHAR2(400),
    FILE_TYPE VARCHAR2(400),
    INSERT_TIME   VARCHAR2(255),
    UPDATE_TIME   VARCHAR2(255),
    DELETE_YN     VARCHAR2(3),
    DELETE_TIME   VARCHAR2(255)
);


CREATE TABLE BOARD_USER
(
    USER_ID       NUMBER(5) NOT NULL
        CONSTRAINT PK_BOARD_USER PRIMARY KEY,
    NAME          VARCHAR2(30),
    EMAIL         VARCHAR2(300) UNIQUE,
    PASSWORD      VARCHAR2(300),
    DESCRIPT      VARCHAR2(300),
    ROLE          VARCHAR2(20),
    REFRESH_TOKEN VARCHAR2(500),
    INSERT_TIME   VARCHAR2(255),
    UPDATE_TIME   VARCHAR2(255),
    DELETE_YN     VARCHAR2(3),
    DELETE_TIME   VARCHAR2(255)
);


CREATE TABLE BOARD
(
    BID         NUMBER(5) NOT NULL
        CONSTRAINT PK_BOARD PRIMARY KEY,
    TITLE       VARCHAR2(500),
    CONTENT     CLOB,
    VIEWS       NUMBER(5),
--     나중에 바꿀 것 (참조키로 바꿔야함)
    USER_ID     NUMBER(5)
    ,CONSTRAINT FK_USER_BOARD_USER_ID FOREIGN KEY (USER_ID)
    REFERENCES BOARD_USER(USER_ID),
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_YN   VARCHAR2(3),
    DELETE_TIME VARCHAR2(255)
);


COMMIT;