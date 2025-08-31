<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";

$rss_feed = simplexml_load_file("https://jeff-test-message.blogspot.com/feeds/posts/default/-/message?alt=rss");
if(!empty($rss_feed)) {
$i=0;
foreach ($rss_feed->channel->item as $feed_item) {
// if($i>=10) break;
?>
<div>
    <a class="feed_title" href="<?php echo $feed_item->link; ?>"><?php echo $feed_item->title; ?></a>
</div>
<div>
    <?php echo $feed_item->description ; ?>
</div>
<div>
    <?php 
    $postDate = $feed_item->pubDate;
    $pubDate = date('D, d M Y',strtotime($postDate));
    echo $pubDate;
    ?>
</div>
<?php $i++;}}?>

</body>
</html>