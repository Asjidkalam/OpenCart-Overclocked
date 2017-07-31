<?php echo $header; ?>
<div id="content">
  <div class="breadcrumb">
  <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
  <?php } ?>
  </div>
  <?php if ($error_warning) { ?>
    <div class="warning"><?php echo $error_warning; ?></div>
  <?php } ?>
  <?php if ($success) { ?>
    <div class="success"><?php echo $success; ?></div>
  <?php } ?>
  <div class="box">
    <div class="heading">
      <h1><img src="view/image/theme.png" alt="" /> <?php echo $heading_title; ?></h1>
      <div class="buttons">
        <a href="<?php echo $insert; ?>" class="button"><?php echo $button_insert; ?></a>
        <a onclick="$('form').submit();" class="button-delete"><?php echo $button_delete; ?></a>
      </div>
    </div>
    <div class="content-body">
    <?php if ($navigation_hi) { ?>
      <div class="pagination" style="margin-bottom:10px;"><?php echo $pagination; ?></div>
    <?php } ?>
      <form action="<?php echo $delete; ?>" method="post" enctype="multipart/form-data" id="form">
        <table class="list">
        <thead>
          <tr>
            <td width="1" style="text-align:center;"><input type="checkbox" onclick="$('input[name*=\'selected\']').attr('checked', this.checked);" id="check-all" class="checkbox" />
            <label for="check-all"><span></span></label></td>
            <td class="left"><?php if ($sort == 'name') { ?>
              <a href="<?php echo $sort_name; ?>" class="<?php echo strtolower($order); ?>"><?php echo $column_name; ?></a>
            <?php } else { ?>
              <a href="<?php echo $sort_name; ?>"><?php echo $column_name; ?>&nbsp;&nbsp;<img src="view/image/sort.png" alt="" /></a>
            <?php } ?></td>
            <td class="left"><?php echo $column_status; ?></td>
            <td class="left"><?php echo $column_date_added; ?></td>
            <td class="left"><?php echo $column_date_modified; ?></td>
            <td class="right"><?php echo $column_action; ?></td>
          </tr>
        </thead>
        <tbody>
        <?php if ($administrations) { ?>
          <?php foreach ($administrations as $administration) { ?>
          <tr>
            <td style="text-align:center;"><?php if ($administration['selected']) { ?>
              <input type="checkbox" name="selected[]" value="<?php echo $administration['administration_id']; ?>" id="<?php echo $administration['administration_id']; ?>" class="checkbox" checked />
              <label for="<?php echo $administration['administration_id']; ?>"><span></span></label>
            <?php } else { ?>
              <input type="checkbox" name="selected[]" value="<?php echo $administration['administration_id']; ?>" id="<?php echo $administration['administration_id']; ?>" class="checkbox" />
              <label for="<?php echo $administration['administration_id']; ?>"><span></span></label>
            <?php } ?></td>
            <td class="left">stylesheet_<?php echo $administration['name']; ?>.css</td>
            <?php if ($administration['status']) { ?>
              <td class="center"><span class="enabled"><?php echo $text_present; ?></span></td>
            <?php } else { ?>
              <td class="center"><span class="disabled"><?php echo $text_missing; ?></span></td>
            <?php } ?>
            <td class="center"><?php echo $administration['date_added']; ?></td>
            <td class="center"><?php echo $administration['date_modified']; ?></td>
            <td class="right"><?php foreach ($administration['action'] as $action) { ?>
              <a href="<?php echo $action['href']; ?>" class="button-form"><?php echo $action['text']; ?></a>
            <?php } ?></td>
          </tr>
          <?php } ?>
        <?php } else { ?>
          <tr>
            <td class="center" colspan="6"><?php echo $text_no_results; ?></td>
          </tr>
        <?php } ?>
        </tbody>
        </table>
      </form>
    <?php if ($navigation_lo) { ?>
      <div class="pagination"><?php echo $pagination; ?></div>
    <?php } ?>
    </div>
  </div>
</div>
<?php echo $footer; ?>