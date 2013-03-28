<?php

class get_extensionsTest extends PHPUnit_Framework_TestCase {

    public function testExtensions() {
        $params = array('action' => 'get_extensions', 'session' => file_get_contents(sys_get_temp_dir().'/session'));
        $out = shell_exec("php data_.php " . addslashes(json_encode($params)));
        $res = json_decode($out);
        $this->assertEquals(true, $res->success);
    }

}

?>
