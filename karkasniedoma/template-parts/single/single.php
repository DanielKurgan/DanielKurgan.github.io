<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package karkasniedoma
 */
?>

<?php get_header(); ?>

<div class="single-page">
	<div class="container">
		<span class="single-page__title">Проект "<?php echo get_field( "post-house-item__title" ) ?>" <?php echo get_field("post-house-item__area") ?> м<sup>2</sup> </span>
		<div class="single-page__block">

			<div class="single-page__block-images">
				<?php $postHouseItemImage1 = get_field('post-house-item__image1'); ?>
				<a class="fancybox" href="<?php echo esc_url($postHouseItemImage1['url']); ?>">
					<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage1['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
				</a>

				<div class="single-page__block-images__group">

					<?php $postHouseItemImage2 = get_field('post-house-item__image2'); ?>
					<a href="<?php echo esc_url($postHouseItemImage2['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage2['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

					<?php $postHouseItemImage3 = get_field('post-house-item__image3'); ?>
					<a href="<?php echo esc_url($postHouseItemImage3['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage3['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

					<?php $postHouseItemImage4 = get_field('post-house-item__image4'); ?>
					<a href="<?php echo esc_url($postHouseItemImage4['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage4['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

					<?php $postHouseItemImage5 = get_field('post-house-item__image5'); ?>
					<a href="<?php echo esc_url($postHouseItemImage5['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage5['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

					<?php $postHouseItemImage6 = get_field('post-house-item__image6'); ?>
					<a href="<?php echo esc_url($postHouseItemImage6['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage6['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

					<?php $postHouseItemImage7 = get_field('post-house-item__image7'); ?>
					<a href="<?php echo esc_url($postHouseItemImage7['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage7['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

<!-- 					<?php $postHouseItemImage8 = get_field('post-house-item__image8'); ?>
					<a href="<?php echo esc_url($postHouseItemImage8['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage8['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a>

					<?php $postHouseItemImage9 = get_field('post-house-item__image9'); ?>
					<a href="<?php echo esc_url($postHouseItemImage9['url']); ?>" class="fancybox" >
						<img class="single__main-image" src="<?php echo esc_url($postHouseItemImage9['url']); ?>" alt="<?php echo esc_attr($postHouseItemImage1['alt']); ?>">
					</a> -->

				</div>
			</div>

			<div class="single-page__block-text">
				<div class="single-page__block-characteristics">

					<?php  if( $postHouseItemArea = get_field( "post-house-item__area" ) ) { ?>
						<div class="single-page__block-characteristics__item">
							<span class="single-page__block-characteristics__item-name">Площадь</span>
							<span class="single-page__block-characteristics__item-value"><?php echo $postHouseItemArea; ?></span>
						</div>						
					<?php } else {} ?>

					<?php  if( $postHouseItemFloor = get_field( "post-house-item__floor" ) ) { ?>
						<div class="single-page__block-characteristics__item">
							<span class="single-page__block-characteristics__item-name">Этажей</span>
							<span class="single-page__block-characteristics__item-value"><?php echo $postHouseItemFloor; ?></span>
						</div>						
					<?php } else {} ?>

					<?php  if( $postHouseItemLong = get_field( "post-house-item__long" ) ) { ?>
						<div class="single-page__block-characteristics__item">
							<span class="single-page__block-characteristics__item-name">Длина</span>
							<span class="single-page__block-characteristics__item-value"><?php echo $postHouseItemLong; ?></span>
						</div>						
					<?php } else {} ?>

					<?php  if( $postHouseItemPlus = get_field( "post-house-item__plus" ) ) { ?>
						<div class="single-page__block-characteristics__item">
							<span class="single-page__block-characteristics__item-name">Дополнительно</span>
							<span class="single-page__block-characteristics__item-value"><?php echo $postHouseItemPlus; ?></span>
						</div>						
					<?php } else {} ?>

					<?php  if( $postHouseItemTarget = get_field( "post-house-item__target" ) ) { ?>
						<div class="single-page__block-characteristics__item">
							<span class="single-page__block-characteristics__item-name">Назначение</span>
							<span class="single-page__block-characteristics__item-value"><?php echo $postHouseItemTarget; ?></span>
						</div>						
					<?php } else {} ?>

					<?php  if( $postHouseItemClass = get_field( "post-house-item__class" ) ) { ?>
						<div class="single-page__block-characteristics__item">
							<span class="single-page__block-characteristics__item-name">Класс</span>
							<span class="single-page__block-characteristics__item-value"><?php echo $postHouseItemClass; ?></span>
						</div>						
					<?php } else {} ?>

				</div>
				<div class="single-page__block-dop">
					<span class="single-page__block-dop__title single-title">Дополнительно вы можете заказать:</span>
					<ul>
						<li class="single-page__block-dop__item">Установка системы отопления</li>
						<li class="single-page__block-dop__item">Системы водоснабжения и канализации</li>
						<li class="single-page__block-dop__item">Электроснабжение</li>
					</ul>
				</div>
				<div class="single-page__block-fundaments">
					<span class="single-page__block-fundaments__title single-title">Фундаменты</span>
					<div class="single-page__block-fundatements__block">
						<div class="single-page__block-fundatements__block-element">
							<a href="#">
								<img src="<?php echo get_template_directory_uri(); ?>/inc/img/bg-fundament1.jpg" alt="img">
								<span>Ленточный</span>
							</a>
						</div>
						<div class="single-page__block-fundatements__block-element">
							<a href="#">
								<img src="<?php echo get_template_directory_uri(); ?>/inc/img/bg-fundament2.jpg" alt="img">
								<span>Монолитная плита</span>
							</a>
						</div>
						<div class="single-page__block-fundatements__block-element">
							<a href="#">
								<img src="<?php echo get_template_directory_uri(); ?>/inc/img/bg-fundament3.jpg" alt="img">
								<span>Свайно-винтовой</span>
							</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<?php get_footer(); ?>