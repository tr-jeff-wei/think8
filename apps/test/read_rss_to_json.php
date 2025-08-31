
<?php
//echo "My first PHP script!";

$myfile = fopen("msgData.js", "w") or die("Unable to open file!");


$rss_link ="https://jeff-test-message.blogspot.com/feeds/posts/default/-/message?alt=rss";
$rss_feed = simplexml_load_file($rss_link);
$data_arr=array();
if(!empty($rss_feed)) {
$i=0;
foreach ($rss_feed->channel->item as $feed_item) {
    $data_arr_elt=array();
    array_push($data_arr_elt,"message");
    // if($i>=10) break;
    echo $feed_item->title;
    array_push($data_arr_elt,"".strip_tags($feed_item->title));

    // echo $feed_item->link;
    // array_push($data_arr,"".$feed_item->link);
    
    echo $feed_item->description ; 
    array_push($data_arr_elt,strip_tags("".$feed_item->description));

    $postDate = $feed_item->pubDate;
    $pubDate = date('D, d M Y',strtotime($postDate));
    echo $pubDate;
    array_push($data_arr_elt,$pubDate);

    array_push($data_arr,$data_arr_elt);

    $i++;
}}
echo json_encode($data_arr);
fwrite($myfile,"var msgdata = '");
fwrite($myfile, json_encode($data_arr));
fwrite($myfile,"'");
fclose($myfile);
?>
