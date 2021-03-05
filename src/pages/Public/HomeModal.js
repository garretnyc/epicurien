
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import Dialog from '@material-ui/core/Dialog';


import Grid from "@material-ui/core/Grid";

import background from "../../assets/images/photo-cover-epi1.jpeg";




const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    height: "100vh",
    display: "flex",
    backgroundImage: `url(${background})`,

    flexDirection: "column",
  },
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
    flexGrow: "1",
  },
  boxWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
 
  textRegister: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  
  textAttribution: {
    padding: theme.spacing(0, 2, 2, 0),
    textAlign: "right",
  },
  textCreator: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  loginButtonRoot: {
    marginTop: theme.spacing(3),
  },
  loginButtonText: {
  
    color: theme.palette.secondary.contrastText,
    textTransform: "capitalize",
  },
  logo: {
    height: theme.spacing(12),
    width: theme.spacing(15),
    padding: theme.spacing(0, 0, 1, 0),
  },
  inputRoot: {
    "&$inputFocused $inputNotchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    maxWidth: "90%",
    maxHeight: "80%",
  },
  inputNotchedOutline: {},
  inputFocused: {},
  inputLabelRoot: {
    "&$inputFocused": {
      color: theme.palette.secondary.main,
    },
  },
}));

const HomeModal = (props) => {
  const classes = useStyles();

  const [initAdresse,setInitAdresse] =React.useState();

  const inputProps = {
    classes: {
      root: classes.inputRoot,
      notchedOutline: classes.inputNotchedOutline,
      focused: classes.inputFocused,
    },
  };
  const inputLabelProps = {
    classes: {
      root: classes.inputLabelRoot,
      focused: classes.inputFocused,
    },
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  };


  return (
    <div className={classes.pageWrapper} style={{}}>
      <Container maxWidth="md" className={classes.pageContainer}>
       <Dialog  aria-labelledby="simple-dialog-title" open={true}>
        <Paper elevation={5}>
          <form className={classes.boxWrapper} onSubmit={handleSubmit} id="login-page">

            <Grid
              container
              spacing={90}
              alignItems="flex-end"
              style={{
                borderWidth: "1px ",
                borderRadius: "45px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#C0BFCA",
                width: "100%",
                height: "60px",
               
                opacity: 1,
           
              }}
            >
              <Grid style={{ marginBottom: "25px", marginLeft: "20px" }}>
                <PlaceOutlinedIcon />
              </Grid>
              <Grid
                item
                md={true}
                sm={true}
                xs={true}
                style={{ marginBottom: "25px", marginLeft:"10px",}}
              >
                <TextField
               
                  InputLabelProps={inputLabelProps}
                  InputProps={inputProps}
                  name="email"
                  onChange={(event) => setInitAdresse(event.target.value)}
                  label="Votre Adresse"
                  type=""
                  width="100%"
                />
              </Grid>
            </Grid>

            <Button
              classes={{
                root: classes.loginButtonRoot,
                label: classes.loginButtonText,
              }}
              type="submit"
              disabled={initAdresse === "" }
              variant="contained"
              color="secondary"
              disableElevation
              fullWidth
              size="large"
            >
              Trouvez vos commerçants de proximité{" "}
            </Button>
            <Typography
              className={classes.textNotice}
              color="textSecondary"
              variant="caption"
            ></Typography>
          </form>
        </Paper>
        </Dialog>
         </Container>

    </div>
  );
};




export default HomeModal;

/*export default function HomeModal(props) {
    return (
        <React.Fragment>
        <h1>Modal, </h1>
        </React.Fragment>
    )
  }
  */