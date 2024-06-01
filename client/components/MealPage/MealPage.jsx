import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Alert from "@mui/material/Alert";
import Checkbox from '@mui/material/Checkbox';

import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { useGetSingleMealQuery, useDeleteFoodMutation, usePostFoodMutation } from "../../redux/api";
import { usePatchMealMutation, usePatchMealFoodRemoveMutation } from "../../redux/api";
import { usePatchFoodMutation, usePatchFoodCoolerToggleMutation } from "../../redux/api";

const MealPage = () => {

}

export default MealPage