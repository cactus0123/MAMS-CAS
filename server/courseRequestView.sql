CREATE VIEW course_request_view AS
SELECT 
    cr.requestid,
    cr.studentid,
    courses.cid,
    courses.title,
    courses.cat,
    courses.approver,
    courses.pterms,
    courses.contract,
    courses."MAMS Prerequisites",
    cr.status,
    cr.note
FROM course_requests cr
JOIN courses ON cr.cid = courses.cid;
