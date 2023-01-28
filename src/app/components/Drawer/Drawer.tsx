import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        height:"100%",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        backgroundColor: "#2e283a",
        fontSize: "17px",
        fontFamily: "soleil,sans-serif",
        color: "#f4f4f4",
        lineHeight: "1.88",
        fontWeight: "300",
        cursor: "pointer",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <h3 style={{textAlign:'center'}}>Introduction to AI</h3>
        <Divider style={{backgroundColor:"white"}} />
      <List>
        {[
          "Importing Libraries",
          "Importing the Dataset",
          "Data Cleaning",
          "Data Exploration",
        ].map((text, index) => (
          <ListItem button key={text} sx={{"&:hover": {backgroundColor:"#009ffd", fontWeight:700}}}>
            <ListItemText primary={`Chapter ${index + 1}: ${text}`} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="quiz__footer__left" onClick={toggleDrawer(anchor, true)}>

              <ListIcon style={{color:'white'}}/>
              <p>Introduction to AI</p></div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
