<?php

class Application_Model_DbTable_Message extends Zend_Db_Table_Abstract
{

    protected $_name = 'message';

    function postMessage($data, $employee)
    {
        $time = time();

        $data = array(
            'id'                        => '',
            'employee_code_from'        => $data['code_from'],
            'employee_code_from_name'   => $employee->full_name,
            'employee_code_to'          => $data['code_to'],
            'message'                   => $data['message'],
            'month'                     => date('n'),
            'year'                      => date('Y'),
            'date_posted'               => date('Y-m-d H:i:s', $time),
            'pretty_date_posted'        => date('Y.n.j g:ia', $time),
            'date_with_tz'              => date('c', $time),
            'anonymous'                 => $data['hide']
        );

        return $this->insert($data);
    }

    function insertMessagesFromPrivate($data)
    {
        $data = array(
            'id'                        => '',
            'employee_code_from'        => $data['employee_code_from'],
            'employee_code_from_name'   => $data['fullname'],
            'employee_code_to'      => hash('md5', $data['email']),
            'message'               => $data['message'],
            'month'                 => $data['month'],
            'year'                  => $data['year'],
            'date_posted'           => $data['date_posted'],
            'pretty_date_posted'    => $data['pretty_date_posted'],
            'anonymous'             => $data['anonymous']
        );

        return $this->insert($data);
    }

    function getTotalMessage($employee_code, $type)
    {
        if($type === 'winner'){
            $month  = date('n', strtotime('-1 month'));
        } else{
            $month  = date('n');
        }
        $year   = date('Y');


        $statement = "
            SELECT COUNT(id) AS count FROM message
            WHERE 
                employee_code_to    = '$employee_code' AND 
                month               = $month AND 
                year                = $year
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }

    function getTotalMessageForWinner($employee_code, $data)
    {
        $statement = "
            SELECT COUNT(id) AS count FROM message
            WHERE 
                employee_code_to    = '$employee_code' AND 
                month               = $data[month] AND 
                year                = $data[year]
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }

    function fetchMessages($employee_code, $start, $type)
    {
        if($type === 'winner'){
            $month  = date('n', strtotime('-1 month'));
        } else {
            $month  = date('n');
        }
        $year   = date('Y');

        $statement = "
            SELECT m.*, e.avatar_path FROM message AS m
            JOIN employee AS e
            ON m.employee_code_from=e.employee_code
            WHERE 
                employee_code_to    = '$employee_code' AND 
                month               = $month AND 
                year                = $year
            ORDER BY date_posted DESC
            LIMIT $start, 6
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }

    function fetchMessagesForWinners($data)
    {
        $statement = "
            SELECT m.*, e.avatar_path FROM message AS m
            JOIN employee AS e
            ON m.employee_code_from=e.employee_code
            WHERE 
                m.employee_code_to    = '$data[employee_code]' AND 
                m.month               = $data[month] AND 
                m.year                = $data[year]
            ORDER BY date_posted DESC
            LIMIT $data[start], 6
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }

    function fetchSingleMessage($data)
    {
        $statement = "
            SELECT m.*, e.avatar_path FROM message AS m
            JOIN employee AS e
            ON m.employee_code_from=e.employee_code
            WHERE 
                m.id    = '$data[msg_id]'
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }

    function fetchRecentTopFiveSentCards($where)
    {
        $sql = "
            SELECT m.*, DATE_FORMAT(m.date_posted,'%Y-%m-%dT%TZ') as pretty, e.full_name, e.avatar_path, e.email FROM message AS m
            JOIN employee AS e
            ON m.employee_code_to=e.employee_code
            WHERE 
                m.employee_code_from    = ? AND 
                m.month               = ? AND 
                m.year                = ?
            ORDER BY date_posted DESC
            LIMIT 0, 6
        ";

        return $this->_db->fetchAll($sql, $where);
    }

    function fetchAllSentMessage($where)
    {
        $sql = "
            SELECT m.*, DATE_FORMAT(m.date_posted,'%Y-%m-%dT%TZ') as pretty, e.full_name, e.avatar_path, e.email FROM message AS m
            JOIN employee AS e
            ON m.employee_code_to=e.employee_code
            WHERE 
                m.employee_code_from    = ? AND 
                m.month               = ? AND 
                m.year                = ?
            ORDER BY date_posted DESC
        ";

        return $this->_db->fetchAll($sql, $where);
    }


/*---------------------------
    Fetch number of newly sent cards
----------------------------*/    
    function fetchNewlyReceivedCards($data)
    {
        $today      = date('Y-m-d');
        $where      = array($data->logout, $data->employee_code);
        $sql = "
            SELECT COUNT(id) AS msg_count FROM message
            WHERE 
                date_posted         >= ? AND
                employee_code_to    = ?
        ";
        return $this->_db->fetchRow($sql, $where);
    }

}

