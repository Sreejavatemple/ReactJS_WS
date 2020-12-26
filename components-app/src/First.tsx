import React from "react";
import { Typography } from "@material-ui/core";

export default function First():any{
    return(
       <React.Fragment>
            <Typography variant="h2"
                        align="center"
                        color="secondary">
                ECommerce Application
            </Typography>
            <Typography variant="h3"
                        align="center"
                        color="primary">
                Electronics
            </Typography>
       </React.Fragment>
    )
};