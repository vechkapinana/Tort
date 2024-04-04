import { Route, Routes } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import Shop from "../pages/Shop";


function Content(){
    return(
        <>
        <div className='content-wrapper'>
            <div className='content'>
                <Routes>
                    <Route path={SHOP_ROUTE} element={<Shop />} />
                    {/* <Route path={SHOP_ROUTE} element={< />}/> */}
                </Routes>
            </div>
        </div>
        </>
    )
}

export default Content