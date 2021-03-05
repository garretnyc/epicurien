import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//import {formatMoney} from "../../pipes/priceFormatter";
import cumulativeOffSet from "../../utilities/cumulativeOffSet";
import { Grid } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import './Product.scss';
import {addProductToCart} from "../../actions";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    product__price:{
        marginLeft:"10px"
    }
   
  });


const Product = (props) => {

    const {
        title,
        note,
        images,
        description,
        id,
    } = props.product;

    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    const [aItem, setAItem] = useState(0);
    const classes = useStyles();


    const handleImageChange = (e) => {

        let  clientX;

        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const currentX = clientX - cumulativeOffSet(imageRef.current).left;

        // console.dir(imageRef.current);

        const part = imageRef.current.clientWidth / images.length;
       // console.log(Math.ceil(currentX / part) - 1);

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }

        if (imgIndex >= images.length) {
            imgIndex = images.length - 1;
        }
        setAItem(imgIndex);
        setImg(images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(images[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(images[i]);
        setAItem(i);
    }

    return (
        <React.Fragment>







    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
          ref={imageRef}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
               <Link to={`/products/${id}`}>{title}</Link>
               <span className={classes.product__price}>*{note}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <button
        onClick={() => {
        props.dispatch(addProductToCart({...props.product}))
        }}
        className="btn btn-info product__add-to-cart">Take a look
        </button>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>

     
        <Grid lg={3} xs={3} style={{display:"flex",flexDirection:"row"}}>
        
            <Grid item >
              

            
            </Grid>
        </Grid>
        </React.Fragment>
    );
};

export default connect()(Product);

/*

        <Grid lg={3} xs={3} style={{display:"flex",flexDirection:"row"}}>
            <Link to={`/products/${id}`} className="product__link"><img
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                onTouchMove={handleImageChange}
                onTouchEnd={handleMouseOut}
                className="card-img-top product__img" src={img} alt={title} ref={imageRef}/>
           
            </Link>
            <Grid item >
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <h5 className="product__price">${note}</h5>
                <p className="card-text product__description">{description}</p>
                <button
                    onClick={() => {
                        props.dispatch(addProductToCart({...props.product}))
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>
            </Grid>
        </Grid> */