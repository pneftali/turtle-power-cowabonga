<?php

class Application_Model_DbTable_Private extends Zend_Db_Table_Abstract
{

    protected $_name = 'private';

    function postMessage($data)
    {
        $month  = date('n');
        $year   = date('Y');

        $data = array(
            'id'                    => '',
            'email'                 => $data['email'],
            'message'               => $data['message'],
            'confirmation_link'     => $data['confirmation_link'],
            'employee_code_from'    => $data['employee_code_from'],
            'month'                 => date('n'),
            'year'                  => date('Y'),
            'date_posted'           => date('Y-m-d H:i:s'),
            'pretty_date_posted'    => date('Y.n.j g:ia'),
            'anonymous'             => $data['hide']
        );

        return $this->insert($data);
    }

    function fetchMessages($confirmation_link)
    {
        $statement = "
            SELECT p.*, e.full_name AS fullname
            FROM private AS p
            JOIN employee As e
            ON p.employee_code_from=e.employee_code
            WHERE confirmation_link='$confirmation_link'
            ORDER BY id ASC
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }


    function fetchUserData($confirmation_link)
    {
        $statement = "
            SELECT * FROM private
            WHERE confirmation_link='$confirmation_link'
            ORDER BY id ASC
        ";
        $query = $this->_db->query($statement);
        return $query->fetch();
    }


    function updateMessageStatus($id)
    {
        $statement = "
            UPDATE private 
            SET state=1
            WHERE id=$id
        ";
        $query  = $this->_db->query($statement);
    }


    function checkPrivateMessageState($data)
    {        
        $statement = "
            SELECT state, email FROM private
            WHERE id='$data[pid]'
            AND confirmation_link='$data[cid]'
        ";
        $query = $this->_db->query($statement);
        return $query->fetch();
    }

    function checkPrivateMessageAnon($data)
    {        
        $statement = "
            SELECT anonymous FROM private
            WHERE 
                id                  = '$data[pid]' AND 
                confirmation_link   = '$data[cid]'
        ";
        $query = $this->_db->query($statement);
        return $query->fetch();
    }


/*---------------------------
    Called from PrivateController
----------------------------*/  
    function fetchUserDataForRankings($confirmation_code)
    {
        $statement = "
            SELECT 
                COUNT(*) AS count,
                MD5(email) AS employee_code,
                month,
                year
            FROM private
            WHERE
                confirmation_link = '$confirmation_code'
            GROUP BY
                month,
                year
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }   

    function fetchSingleMessage($data)
    {
        $statement = "
            SELECT p.*, e.avatar_path, e.full_name FROM private AS p
            JOIN employee AS e
            ON p.employee_code_from=e.employee_code
            WHERE 
                p.id    = '$data[msg_id]'
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }

}





























