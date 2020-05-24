import {withStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";

export const RealEstateFormControl = withStyles(() => ({
    root: {
        minWidth: 120,
        width: '100%',
        textAlign: 'left',
        marginBottom: 10,
        padding: 0,
    },
}))(FormControl);