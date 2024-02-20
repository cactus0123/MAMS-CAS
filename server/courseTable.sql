CREATE TABLE courses (
    "#N" INTEGER PRIMARY KEY, 
    CID VARCHAR(20), 
    TITLE TEXT, 
    DEPT VARCHAR(10), 
    CN VARCHAR(10), 
    CAT VARCHAR(20), 
    Approver TEXT,
    Appr_User VARCHAR(20),
    Appr_Init VARCHAR(5),
    PTerms VARCHAR(10),  
    Show VARCHAR(5), 
    Contract VARCHAR(5), 
    "MAMS Prerequisites" TEXT, 
    CATID INTEGER
);
