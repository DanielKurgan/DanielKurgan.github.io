 <?php require($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');?>
 <?php get_header(); ?>

 <?php

 $order = [];
 if (  isset($_GET['order-price'])  ) {
 	$order['price'] = $_GET['order-price'];
 } else if (   isset($_GET['order-area'])   ) {
 	$order['area'] = $_GET['order-area'];
 };

 $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
 $args = array(
 	'paged' => $paged,
 	'posts_per_page' => 100,
 	'category_name' => 'posthouseitem', 

 	'meta_query' => array(
 		'relation' => 'AND',
 		'price' => array(
 			'key'     => 'post-house-item__price',
 		),
 		'area' => array(
 			'key'     => 'post-house-item__area',
 		),
 	),

 	'orderby' => $order,
 );

 ?>
 <section class="blog archive section">
 	<div class="container">
 		<div class="row">
 			<div class="col-lg-12">
 				<div class="ordering-wrap">
 					<div class="select-outer">
 						<div class="filter-form">
 							<form class="filter-form__form" action="<?php echo get_template_directory_uri(); ?>/customsearch.php/" method="get">
 								<label>Сортировать по:</label>
 								<label class="price-asc"><input onclick="submit();" type="radio" name="order-price" value="ASC">цене (сначала дешёвые),</label><br/>
 								<label class="price-desc"><input onclick="submit();" type="radio" name="order-price" value="DESC">цене (сначала дорогие),</label><br/>
 								<label class="area-asc"><input onclick="submit();" type="radio" name="order-area" value="ASC">площадь (по возрастанию),</label><br/>
 								<label class="area-desc"><input onclick="submit();" type="radio" name="order-area" value="DESC">площадь (по убыванию)</label><br/>
 							</form>
 						</div>
 					</div>
 				</div>
 			</div>
 		</div>
 		<div class="row">
 			<div class="col-lg-12 d-flex flex-wrap">

 				<!-- Single Blog -->
 				<?php

 				$query = new WP_Query( $args );
 				if ( $query->have_posts() ) { while ( $query->have_posts() ) { $query->the_post(); ?>

 					<?php get_template_part( 'post-templates/post-house_item', get_post_type() ); ?>

				<?php }
				} ?>


 		</div>
 	</div>



 	<!-- pagination -->
 	<div class="row">
 		<div class="col-12">
 			<div class="pagination">
 				<?php travelia_bs_pagination();?>
 			</div>
 		</div>
 	</div>
 	<!--/ End pagination -->
 </div>
</section>

<?php

get_footer();
