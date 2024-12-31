import * as React from "react";
const MyCustButton = ({var1,var2})=><button disabled={var1}>{var2}</button>;
MyCustButton.defaultProps = {
    var1: false,
    var2: 'Button Text',
};
export default MyCustButton;