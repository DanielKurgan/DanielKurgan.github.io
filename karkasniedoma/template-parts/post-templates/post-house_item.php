<?php 

/**
*Template Name: Шаблон поста дома
*Template Post Type: post, page, product
*/

?>
	<div class="catalog-item">
		<a href="<?php echo get_permalink(); ?>">
			<?php $postHouseItemImage1 = get_field('post-house-item__image1'); ?>
			<img class="catalog-item__image" src="<?php echo esc_url($postHouseItemImage1['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>" />
		</a>
		<div class="catalog-item__main-characteristics">
			<a href="<?php echo get_permalink(); ?>" class="catalog-item__name">
				<?php 
				if ( $postHouseItemTitle = get_field( "post-house-item__title" ) ) {
					echo $postHouseItemTitle;
				} else {} 
				?>
			</a>
			<span class="catalog-item__price-tag">от 
				<span class="catalog-item__price">
					<?php 
					if( $postHouseItemPrice = get_field( "post-house-item__price" ) ) {
						echo $postHouseItemPrice;
					} else {} 
					?>
				</span><span> Р</span>
			</span>
		</div>
		<div class="catalog-item__characteristics">

			<?php 
			if( $postHouseItemArea = get_field( "post-house-item__area" ) ) { ?>
				<span class="catalog-item__char"><span class="catalog-item__area">

					<?php echo $postHouseItemArea; ?>

				</span> м<sup>2</sup></span>
			<?php } else {}
			?>

			<?php	
			if( $postHouseItemFloor = get_field( "post-house-item__floor" ) ) { ?>
				<span class="catalog-item__char"><span class="catalog-item__flat"></span> <?php echo num_decline( $postHouseItemFloor, 'этаж, этажа, этажей' ); // > 1 этаж ?></span>
			<?php } else {}  ?>

			<?php 
			if( $postHouseItemRooms = get_field( "post-house-item__rooms" ) ) { ?>
				<span class="catalog-item__char"><span class="catalog-item__rooms">
				</span><?php echo num_decline( $postHouseItemRooms, 'спальня, спальни, спален' ); // > 1 книга ?></span>
			<?php } else {} ?>

		</div>
	</div>


