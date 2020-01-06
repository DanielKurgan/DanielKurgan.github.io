<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Travelia
 */

get_header();
?>
<!-- Blog -->
<section class="blog archive section">
	<div class="container" id="content">
		<div class="row">

			<div class="catalog-list">
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
				<?php get_template_part( "post-templates/post-house_item", get_post_format() ); ?>
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
<!-- End Blog -->

<?php
get_footer();
