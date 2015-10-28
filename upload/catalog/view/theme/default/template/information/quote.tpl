<?php echo $header; ?>
<?php echo $content_header; ?>
<?php if ($this->config->get('default_breadcrumbs')) { ?>
  <div class="breadcrumb">
  <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
  <?php } ?>
  </div>
<?php } ?>
<?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>
  <h1><?php echo $heading_title; ?></h1>
  <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
    <div class="content">
      <div class="contact-info">
        <div class="info-left">
          <h2><?php echo $text_quote; ?></h2>
          <br />
          <b><?php echo $entry_name; ?></b><br />
          <input type="text" name="name" size="30" value="<?php echo $name; ?>" />
          <br />
          <?php if ($error_name) { ?>
            <span class="error"><?php echo $error_name; ?></span>
          <?php } ?>
          <br />
          <b><?php echo $entry_email; ?></b><br />
          <input type="text" name="email" size="40" value="<?php echo $email; ?>" />
          <br />
          <?php if ($error_email) { ?>
            <span class="error"><?php echo $error_email; ?></span>
          <?php } ?>
          <br />
          <b><?php echo $entry_product; ?></b><br />
          <select name="product">
            <?php foreach ($products as $product) { ?>
              <?php if ($product == $product['name']) { ?>
                <option value="<?php echo $product['name']; ?>" selected="selected"> <?php echo $product['name']; ?> </option>
              <?php } else { ?>
                <option value="<?php echo $product['name']; ?>"> <?php echo $product['name']; ?> </option>
              <?php } ?>
            <?php } ?>
          </select>
          <br />
		  <?php if ($error_product) { ?>
            <span class="error"><?php echo $error_product; ?></span>
          <?php } ?>
          <br />
          <b><?php echo $entry_enquiry; ?></b><br />
          <textarea name="enquiry" cols="40" rows="10" style="width:99%;"><?php echo $enquiry; ?></textarea>
          <br />
          <?php if ($error_enquiry) { ?>
            <span class="error"><?php echo $error_enquiry; ?></span>
          <?php } ?>
          <br />
		  <div id="captcha-wrap">
            <div class="captcha-box">
              <div class="captcha-view">
                <img src="index.php?route=information/quote/captcha" alt="" id="captcha-image" />
              </div>
            </div>
            <div class="captcha-text">
              <label><?php echo $entry_captcha; ?></label>
              <input type="text" name="captcha" id="captcha" value="<?php echo $captcha; ?>" autocomplete="off" />
		    </div>
            <div class="captcha-action"></div>
          </div>
          <br />
          <?php if ($error_captcha) { ?>
            <span class="error"><?php echo $error_captcha; ?></span>
          <?php } ?>
          <div class="buttons">
            <div class="right"><input type="submit" value="<?php echo $button_continue; ?>" class="button" /></div>
          </div>
        </div>
        <?php if (!$hide_location) { ?>
        <div class="info-right">
          <h2><?php echo $text_location; ?></h2>
          <br />
          <img src="catalog/view/theme/<?php echo $template; ?>/image/location/address.png" alt="" /> &nbsp; <b><?php echo $store; ?></b><br />
          <?php echo $address; ?><br />
          <br />
          <?php if ($telephone) { ?>
            <img src="catalog/view/theme/<?php echo $template; ?>/image/location/phone.png" alt="" /> &nbsp; <?php echo $telephone; ?><br />
            <br />
          <?php } ?>
          <?php if ($fax) { ?>
            <img src="catalog/view/theme/<?php echo $template; ?>/image/location/fax.png" alt="" /> &nbsp; <?php echo $fax; ?><br />
			<br />
          <?php } ?>
        </div>
        <?php } ?>
      </div>
    </div>
  </form>
  <?php echo $content_bottom; ?>
</div>
<?php echo $content_footer; ?>

<script type="text/javascript"><!--
$('#captcha-image').load(function(event) { 
	$(event.target).fadeIn(100);
});
//--></script>

<?php echo $footer; ?>