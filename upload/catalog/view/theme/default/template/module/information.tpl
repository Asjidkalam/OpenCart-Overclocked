<?php if ($theme) { ?>
<div class="box">
  <div class="box-heading <?php echo $header_shape; ?>-top <?php echo $header_color; ?>-skin"><?php echo $title; ?></div>
  <div class="box-content <?php echo $content_shape; ?>-bottom <?php echo $content_color; ?>-skin">
    <div class="box-information">
    <ul>
    <?php foreach ($informations as $information) { ?>
      <li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
    <?php } ?>
      <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
      <li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>
    </ul>
    </div>
  </div>
</div>
<?php } else { ?>
  <div class="<?php echo $content_shape; ?> <?php echo $content_color; ?>-skin" style="margin-bottom:20px;">
    <div class="box-information">
    <ul>
    <?php foreach ($informations as $information) { ?>
      <li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
    <?php } ?>
      <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
      <li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>
    </ul>
    </div>
  </div>
<?php } ?>