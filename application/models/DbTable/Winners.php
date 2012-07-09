<?php

class Application_Model_DbTable_Winners extends Zend_Db_Table_Abstract
{

    protected $_name = 'winners';


/*---------------------------
    
----------------------------*/ 
    function fetchWinnerPer($data)
    {
        $statement = "
            SELECT 
                w.*, 
                e.employee_code,
                e.full_name AS fullname, 
                e.position, 
                e.date_join,
                e.profile_img_path 
            FROM winners AS w
            JOIN employee AS e
            ON w.employee_code=e.employee_code
            WHERE 
                w.month         = $data[month] AND
                w.year          = $data[year]
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }    

    function fetchCurrentWinner()
    {
        $statement = "
            SELECT 
                w.*, 
                e.employee_code,
                e.full_name AS fullname, 
                e.position, 
                e.date_join,
                e.profile_img_path 
            FROM winners AS w
            JOIN employee AS e
            ON w.employee_code=e.employee_code
            ORDER BY id DESC
            LIMIT 0,1
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }

/*---------------------------
    
----------------------------*/ 
    function fetchAllWinnersPer($data)
    {   
        $statement = "
            SELECT 
                w.*, 
                e.full_name AS fullname, 
                e.position, 
                e.date_join,
                e.avatar_path 
            FROM winners AS w
            JOIN employee AS e
            ON w.employee_code=e.employee_code
            WHERE 
                w.year          = $data[year]
            ORDER BY month ASC
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }


/*---------------------------
    
----------------------------*/ 
    function insertNewWinner($val)
    {
        $data = array(
            'id'                => '',
            'employee_code'     => $val['employee_code'],
            'count'             => $val['count'],
            'month'             => $val['month'],
            'year'              => $val['year']
        );
        $this->insert($data);
    }

}

