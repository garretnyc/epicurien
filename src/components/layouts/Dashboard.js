
import React, { useRef, useState, useCallback, useEffect } from "react";

import { fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PommeLogo from "../../assets/images/pomme.png"
import Cover from "../../assets/images/header-dashboard.jpeg"


import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { IconButton, useScrollTrigger, useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProductsDetail from "./ProductsDetail"
import ProductsList from "./ProductsList"

import { useHistory, useLocation, withRouter } from "react-router-dom";
import {
  AccountCircleOutlined as AccountsIcon,
  SearchOutlined as SearchIcon,
  Menu as MenuIcon,
  ViewAgendaOutlined as ListIcon,
} from "@material-ui/icons";

import { connect } from "react-redux";


//Extranet conatiners


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#3C4B64",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon: {
    color: "#B1B7C1",
  },
  drawerContainer: {
    overflow: "auto",
  },

  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
    marginTop:theme.spacing(8.3),
    backgroundColor: "#EBEDEF",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "stretch",
    cursor: "pointer",
  },
  logo: {
    //display: "none",
    height: theme.spacing(5.5),
    padding: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    backgroundColor: "#3C4B64",
    color: "white",
    padding: " 5px 10px",
    borderRadius: "3px",
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.paletteIntranet.primary.main,
      color: theme.paletteIntranet.button.main,
    },
  },
  listItemButton: {
    textTransform: "none",
    color: "white",
  },
  listItemButtonTitle: {
    textTransform: "none",
    color: "#B1B7C1",
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(1),
    },
  },
}));

function MainLayout() {
  const classes = useStyles();
  const menuId = "primary-search-account-menu";
 


  //const [isProfilePopoverOpen, setProfilePopoverOpen] = React.useState(false);
  const [openOperationnel, setOpenOperationnel] = React.useState(true);
  const [openAnalyse, setOpenAnalyse] = React.useState(true);
  const [openAdministration, setOpenAdministration] = React.useState(true);


  /*let history = useHistory();

  const searchClient = algoliasearch(
    "Y50P2UWLGH",
    "586c49fc8526fb7fb0ee0227d145ac1a",
    {
      headers: {
        "X-Algolia-UserToken": "123456",
      },
    }
  );
  console.log("user data", user_data);
  const handleClickOperationnel = () => {
    setOpenOperationnel(!openOperationnel);
  };
  const handleClickAnalyse = () => {
    setOpenAnalyse(!openAnalyse);
  };
  const handleClickAdministration = () => {
    setOpenAdministration(!openAdministration);
  };
  const handleClickMenu = (e, name) => {
    history.push(name);
  };/*
  const renderComponent = () => {
    if (history.location.pathname === "/acceuil/administration/extranet") {
      return (
        <React.Fragment>
          <CompteExtranetContainerMain />
        </React.Fragment>
      );
    }

    if (history.location.pathname === "/acceuil/administration/extranet/edit") {
      return (
        <React.Fragment>
          <EditCustomerInfosContainerContainer />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/administration/extranet/new") {
      return (
        <React.Fragment>
          <AddNewCustomerContainer />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/administration/intranet") {
      return (
        <React.Fragment>
          <CompteIntranetContainer />
        </React.Fragment>
      );
    }

    if (history.location.pathname === "/acceuil/administration/intranet/edit") {
      return (
        <React.Fragment>
          <EditIntranet />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/administration/extranet/new") {
      return (
        <React.Fragment>
          <AddNewCustomerContainer />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/administration/intranet/new") {
      return (
        <React.Fragment>
          <AddNewEmployeeContainer />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dashboard/commercial") {
      return (
        <React.Fragment>
          <DashboardCommercial />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dashboard/adv/main") {
      return (
        <React.Fragment>
          <DashboardAdvMain />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/analyses/fournisseurs") {
      return (
        <React.Fragment>
          <AnalyseFournisseur />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/analyses/ventes") {
      return (
        <React.Fragment>
          <AnalyseVentes />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/analyses/produits") {
      return (
        <React.Fragment>
          <AnalyseProduits />
        </React.Fragment>
      );
    }

    if (history.location.pathname === "/acceuil/dashboard") {
      return (
        <React.Fragment>
          <DashboardDgCommMainContainer />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/operationnel/vente") {
      if (user_data.role === "DG") {
        return (
          <React.Fragment>
            <OperationelVente />
          </React.Fragment>
        );
      }
      if (user_data.role === "COMMERCIAL") {
        return (
          <React.Fragment>
            <OperationelVenteComm />
          </React.Fragment>
        );
      }
    }
    if (history.location.pathname === "/acceuil/operationnel/adv") {
      return (
        <React.Fragment>
          <OperationelAdv />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/proformas") {
      return (
        <React.Fragment>
          <ProformaList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/proforma/details") {
      return (
        <React.Fragment>
          <ProformaDetail />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/projetcommandes") {
      return (
        <React.Fragment>
          <ProjetCmdList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/projetcommande/detail") {
      return (
        <React.Fragment>
          <ProjetCmdDetail />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dossiers") {
      return (
        <React.Fragment>
          <DossierList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dossiersEncours") {
      return (
        <React.Fragment>
          <DossiersEnCoursList />
        </React.Fragment>
      );
    }

    if (history.location.pathname === "/acceuil/facturesAvoirs") {
      return (
        <React.Fragment>
          <FacturesAvoirsList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dossiersPasses") {
      return (
        <React.Fragment>
          <DossiersPassesList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dossiers/details") {
      return (
        <React.Fragment>
          <DossierDetail />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/fournisseurs") {
      return (
        <React.Fragment>
          <CmdFournisseurList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/fournisseurs/detail") {
      return (
        <React.Fragment>
          <CmdFournisseur />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/clients") {
      return (
        <React.Fragment>
          <ClientList />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/clients/detail") {
      return (
        <React.Fragment>
          <ClientDetail />
        </React.Fragment>
      );
    }
    if (history.location.pathname === "/acceuil/dashboard/adv/detail") {
      return (
        <React.Fragment>
          <ClientAdvDetail />
        </React.Fragment>
      );
    }
  };*/

  return (
    <React.Fragment>
      <div className={classes.root}>

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar id="toolbar">
           <div style={{display:"flex",flexDirection:"row"}}>
                <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <LogoContainer />
           </div> 
            <div className={classes.grow} />
            <div style={{display:"flex",flexDirection:"row",position: "absolute",left: "43%"}}>
                <div style={{display:"flex",flexDirection:"row",height:"18px",borderRadius:"18px",padding:"8px 12px",background:"#EEEEEE",}}>
                     <LocationOnIcon style={{alignSelf:"center"}} />
                    <Typography style={{alignSelf:"center"}} >Your location</Typography>
                </div>
                
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                        <InputBase
                          placeholder="Search…"
                          style={{background:"#EEEEEE",alignSelf:"center"}}
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
            

            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
   
              >
                <AccountsIcon />
              </IconButton>
            </div>
          </Toolbar>
   
        </AppBar>
       
        <main className={classes.content}>
        
         <div id="dashboard-header" style={{display:"flex",flexDirection:"column"}}>
           <Grid Item>
              <Typography variant="h3">Meilleurs produits de votre quartier,</Typography>
              <Typography>Profitez Maintenant</Typography>

           </Grid>
           <Grid Item>
             <form>
             </form>
           </Grid>
         </div>
          <Toolbar />

          <ProductsList/>
 
        </main>
      </div>
    </React.Fragment>
  );
}

function LogoContainer() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div
      className={classes.logoContainer}
      onClick={() => history.push("/acceuil/dashboard")}
    >
      <img className={classes.logo} src={PommeLogo}   />
    </div>
  );
}
/*
function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;

  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
};*/

/*const connectedMainLayoutAdmin = connect(
  mapState,
  actionCreators
)(MainLayout);*/

export default MainLayout;
/*
<Drawer
className={classes.drawer}
variant="permanent"
id="drawer"
classes={{
  paper: classes.drawerPaper,
}}
>
<div className={classes.drawerContainer}>
  <List
    style={{ background: "rgb(255 255 255 / 0.1)", width: "auto" }}
    id="sidebar-head"
  >  </List>
  <Divider />
</div>
</Drawer>

 */