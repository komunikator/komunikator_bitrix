<?
//sleep(10);
if(!$_SESSION['user']) {
    echo (out(array("success"=>false,"message"=>"User is undefined"))); exit;} 
$sql=
<<<EOD
select * from (
select
	"" id,
	a.time,
	case when x.firstname is null then a.caller else concat(x.firstname,' ',x.lastname,' (',a.caller,')') end caller,
	case when x2.firstname is null then b.called else concat(x2.firstname,' ',x2.lastname,' (',b.called,')') end called,
	b.duration,
	case when a.reason="" then a.status else replace(lower(a.reason),' ','_') end status
from call_logs a  
join call_logs b on b.billid=a.billid and b.ended=1 and b.direction='outgoing' and b.status!='unknown'
left join extensions x on x.extension=a.caller
left join extensions x2 on x2.extension=b.called
where a.ended=1 and a.direction='incoming' and a.status!='unknown') a
EOD;

$data =  compact_array(query_to_array($sql.get_filter()));
if(!is_array($data["data"]))  echo out(array("success"=>false,"message"=>$data));
$total = count($data["data"]);

$data =  compact_array(query_to_array($sql.get_sql_order_limit()));
if(!is_array($data["data"]))  echo out(array("success"=>false,"message"=>$data));

//$total = count($data["data"]);

$obj=array("success"=>true);
$obj["total"] = $total;

/*
$total =  compact_array(query_to_array("SELECT count(*) FROM call_logs ".get_filter()));
if(!is_array($total["data"]))  echo out(array("success"=>false,"message"=>$total));
$data =  compact_array(query_to_array("SELECT \"\" id, time, caller, called, duration,  status FROM call_logs  ".get_sql_order_limit()));
if(!is_array($data["data"])) echo out(array("success"=>false,"message"=>$data));
$obj=array("success"=>true);
$obj["total"] = $total['data'][0][0]; 
//$obj["sql"] = get_sql_order_limit();
//$obj["sql"] = strtotime('2010/08/11 06:33:00'); //get_sql_order_limit();
*/

$f_data = array();
foreach ($data["data"] as $row) {
    $row[1] -= $_SESSION['time_offset']*60;	
    $row[1] = date($date_format,$row[1]); 
    $f_data[] = $row; 
}

$obj["data"] = $f_data; 
echo out($obj);
?>