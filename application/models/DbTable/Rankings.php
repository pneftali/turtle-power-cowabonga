<?php

class Application_Model_DbTable_Rankings extends Zend_Db_Table_Abstract
{

    protected $_name = 'rankings';

/*---------------------------
    NOTE

        state column is a flag to check if the
        user has been broadcasted with a new update.

        when there is a broadcast, state will be set to 1.
        after the user's rank view has been updated, it will be
        reset to 0.
----------------------------*/  



/*---------------------------
    Called from - RankingsController
----------------------------*/  
    function fetchTopRankings($data, $filter)
    {
        $month  = date('n');
        $year   = date('Y');

        if($filter['option'] === 'default'){
            $where  = array($month, $year);
            $sql = "
                SELECT 
                    r.*, 
                    e.full_name, 
                    MD5(e.email) AS email,
                    SUBSTRING_INDEX(e.email, '@', 1) AS sub_email,
                    e.avatar_path 
                FROM rankings AS r
                JOIN employee AS e
                ON e.employee_code = r.employee_code

                WHERE 
                    r.month = ? AND
                    r.year  = ?

                ORDER BY r.count DESC
                LIMIT 0, 5        
            ";
        } else {
            $where  = array($month, $year, '96', '4');
            $sql = "
                SELECT 
                    r.*, 
                    e.full_name, 
                    MD5(e.email) AS email,
                    SUBSTRING_INDEX(e.email, '@', 1) AS sub_email,
                    e.avatar_path 
                FROM rankings AS r
                JOIN employee AS e
                ON e.employee_code = r.employee_code

                WHERE 
                    r.month     = ? AND
                    r.year      = ? AND
                    e.country   = ? AND
                    e.business_unit_code = ?

                ORDER BY r.count DESC
                LIMIT 0, 5        
            ";
        }
        return $this->_db->fetchAll($sql, $where);
    }


/*---------------------------
    Called from - RankingsController    
    Used for long polling.    
----------------------------*/  
    function checkStatus($data)
    {
        $month  = date('n');
        $year   = date('Y');
        $where  = array(
            $data->employee_code,
            1,
            $month,
            $year
            );

        $sql = "
            SELECT COUNT(id) AS status FROM rankings

            WHERE 
                employee_code   = ? AND 
                state           = ? AND 
                month           = ? AND 
                year            = ?
        ";

        return $this->_db->fetchRow($sql, $where);
    }





/*---------------------------
    Called from - MessageController
    Once a msg has been posted, this will be called to update
    the COUNT and STATUS to 1.
----------------------------*/  
    function updateStatus($employee_code, $where)
    {
        $month  = date('n');
        $year   = date('Y');
        
        if( $this->checkIfEmployeeExistForCurrentMonthAndYear($employee_code) ){ // if employee exists, just update
    
            // update count on a specific employee
            $statement = "
                UPDATE rankings AS r
                JOIN employee AS e
                ON e.employee_code = r.employee_code
                SET r.count=r.count+1, r.state=1

                WHERE 
                    e.employee_code = '$employee_code' AND
                    r.month         = $month AND 
                    r.year          = $year
            ";
            $this->_db->query($statement);   

            // update state to all employee in a division
            $statement = "
                UPDATE rankings AS r
                JOIN employee AS e
                ON e.employee_code = r.employee_code
                SET r.state=1

                WHERE 
                    r.month         = $month AND 
                    r.year          = $year
            ";
            return $this->_db->query($statement);         

        } else{ // create a new one for this month

            $data = array(
                'id'                => '',
                'employee_code'     => $employee_code,
                'count'             => 0,
                'month'             => $month,
                'year'              => $year,
                'state'             => 1
            );
            return 'insert: '.$this->insert($data);

        }
    }

    function checkIfEmployeeExistForCurrentMonthAndYear($employee_code)
    {
        $month  = date('n');
        $year   = date('Y');
        $where  = array(
            $employee_code,
            $month,
            $year
            );
        $sql = "
            SELECT id FROM rankings
            WHERE 
                employee_code   = ? AND 
                month           = ? AND 
                year            = ?
        ";
        return $this->_db->fetchRow($sql, $where);
    }


/*---------------------------
    
----------------------------*/  
    function resetStatus($where)
    {
        $statement = "
            UPDATE rankings 
            SET state=0
            WHERE 
                employee_code ='$where->employee_code'
        ";
        $query  = $this->_db->query($statement);       
    }


/*---------------------------
    
----------------------------*/  
    function getRankCurrentRankCount($employee_code)
    {
        $month  = date('n');
        $year   = date('Y');
        $where  = array(
            $employee_code,
            $month,
            $year
            );
        $sql = "
            SELECT count FROM rankings
            WHERE 
                employee_code   = ? AND 
                month           = ? AND 
                year            = ?
        ";
        return $this->_db->fetchRow($sql, $where);  
    }    

    function getAllCardsCount($employee_code)
    {
        $where  = array(
            $employee_code
            );
        $sql = "
            SELECT SUM(count) AS count FROM rankings
            WHERE 
                employee_code   = ?
        ";
        return $this->_db->fetchRow($sql, $where);  
    }

/*---------------------------
    
----------------------------*/  
    function insertRankingsFromPrivate($data_array)
    {
        foreach($data_array AS $key=>$val){
            $data = array(
                'id'                => '',
                'employee_code'     => $val['employee_code'],
                'count'             => $val['count'],
                'month'             => $val['month'],
                'year'              => $val['year'],
                'state'             => 1
            );
            $this->insert($data);
        }        
    }


/*---------------------------
    
----------------------------*/  
    function insertRankingsFromRegistration($data)
    {
        $month  = date('n');
        $year   = date('Y');

        $data = array(
            'id'                => '',
            'employee_code'     => hash('md5', $data['email']),
            'count'             => 0,
            'month'             => $month,
            'year'              => $year,
            'state'             => 0
        );
        $this->insert($data);        
    }    


/*---------------------------
    Broadcast to all employees that a new user just registered
----------------------------*/  
    function updateRankingStatus()
    {
        $month  = date('n');
        $year   = date('Y');

        $statement = "
            UPDATE rankings 
            SET state=1
            WHERE 
                month   = '$month' AND
                year    = '$year'
        ";
        $query  = $this->_db->query($statement);       
    }



/*---------------------------
    Called by WinnerController - updateWinnerTableCronAction
----------------------------*/  
    function getTopRankedEmployee()
    {
        $month  = date('n') - 1;
        $year   = date('Y');
        $where  = array($month, $year);

        $sql = "
            SELECT * FROM rankings
            WHERE 
                month   = ? AND
                year    = ?

            ORDER BY count DESC
            LIMIT 0, 1
        ";
        return $this->_db->fetchRow($sql, $where);      
    }      

}

















































































