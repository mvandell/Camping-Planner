import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Alert from "@mui/material/Alert";

import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { useGetAllEquipmentQuery, useDeleteEquipmentMutation } from "../../redux/api";
import { usePatchEquipmentMutation, usePatchEquipmentPackToggleMutation, usePatchEquipmentNeedToggleMutation } from "../../redux/api";

const EquipmentPage = () => {
    const token = useSelector((state) => state.auth.admin)

    const { data, error, isLoading } = useGetAllEquipmentQuery();
    const [deleteEquipment] = useDeleteEquipmentMutation();
    const [patchEquipment] = usePatchEquipmentMutation();
    const [packToggle] = usePatchEquipmentPackToggleMutation();
    const [needToggle] = usePatchEquipmentNeedToggleMutation();

    console.log(token)

    if (isLoading) {
        return <div> </div>;
    }
    if (error) {
        return <div>Error:{error.message}</div>;
    }

    return (
        <div>
            <Typography variant="h1">
                Equipment
            </Typography>
        </div>
    )
}

export default EquipmentPage