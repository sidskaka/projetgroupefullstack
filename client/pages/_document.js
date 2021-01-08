import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	                <meta name='copyright' content='' />
	                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>Eshop - eCommerce HTML5 Template.</title>

	                <link rel="icon" type="image/png" href="images/favicon.png" />

	                <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />

	                <link rel="stylesheet" href="css/bootstrap.css" />

                    <link rel="stylesheet" href="css/magnific-popup.min.css" />

                    <link rel="stylesheet" href="css/font-awesome.css" />

                    <link rel="stylesheet" href="css/jquery.fancybox.min.css" />

                    <link rel="stylesheet" href="css/themify-icons.css" />

                    <link rel="stylesheet" href="css/niceselect.css" />

                    <link rel="stylesheet" href="css/animate.css" />

                    <link rel="stylesheet" href="css/flex-slider.min.css" />

                    <link rel="stylesheet" href="css/owl-carousel.css" />

                    <link rel="stylesheet" href="css/slicknav.min.css" />

	                <link rel="stylesheet" href="css/reset.css" />
	
                    <link rel="stylesheet" href="css/responsive.css" />
	
	                <link rel="stylesheet" href="style.css" />

                </Head>
                <body>
                    <Main />
                    <NextScript />

					<script src="js/jquery.min.js"></script>
					<script src="js/jquery-migrate-3.0.0.js"></script>
					<script src="js/jquery-ui.min.js"></script>

					<script src="js/popper.min.js"></script>

					<script src="js/bootstrap.min.js"></script>

					<script src="js/colors.js"></script>

					<script src="js/slicknav.min.js"></script>

					<script src="js/owl-carousel.js"></script>

					<script src="js/magnific-popup.js"></script>

					<script src="js/waypoints.min.js"></script>

					<script src="js/finalcountdown.min.js"></script>

					<script src="js/nicesellect.js"></script>

					<script src="js/flex-slider.js"></script>

					<script src="js/scrollup.js"></script>

					<script src="js/onepage-nav.min.js"></script>

					<script src="js/easing.js"></script>

					<script src="js/active.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument