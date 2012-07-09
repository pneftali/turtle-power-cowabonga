<?php

class Application_Model_DbTable_Count extends Zend_Db_Table_Abstract
{

    protected $_name = 'message_count';

/*---------------------------
    
----------------------------*/
    function updateCount($data)
    {
        $month  = date('n');
        $year   = date('Y');

        if($this->checkIfUserExistsForCurrentMonth($data)){ // just incase
            $statement = "
                UPDATE message_count 
                SET count=count-1
                WHERE 
                    employee_code   = '$data->employee_code' AND
                    month           = '$month' AND
                    year            = '$year'
            ";
            $query  = $this->_db->query($statement); 
        } else {
             $data = array(
                'id'                    => '',
                'employee_code'         => $data->employee_code,
                'count'                 => '2',
                'month'                 => $month,
                'year'                  => $year           
            );

            $this->insert($data);
        }
    }

/*---------------------------
    Insert new count for new month    
----------------------------*/    
    function insertNewCount($data)
    {
        $month  = date('n');
        $year   = date('Y');

        $data = array(
            'id'                    => '',
            'employee_code'         => $data['employee_code'],
            'count'                 => '3',
            'month'                 => $month,
            'year'                  => $year           
        );

        $this->insert($data);
    }

/*---------------------------
    Returns TRUE if user exists
    False otherwise
----------------------------*/
    function checkIfUserExistsForCurrentMonth($data)
    {
        $month  = date('n');
        $year   = date('Y');

        $statement = "
            SELECT COUNT(*) AS count
            FROM message_count
            WHERE
                employee_code   = '$data->employee_code' AND
                month           = '$month' AND
                year            = '$year'
        ";

        $query  = $this->_db->query($statement);
        $res    = $query->fetch();
        return ($res['count']) ? 1 : 0;
    }


/*---------------------------
    
----------------------------*/
    function getCurrentMessageCount($code)
    {
        $month  = date('n');
        $year   = date('Y');

        $statement = "
            SELECT SUM(count) AS count             
            FROM message_count 
            WHERE 
                employee_code   = '$code'
        ";
        $query = $this->_db->query($statement);
        return $query->fetch();
    }    
}

