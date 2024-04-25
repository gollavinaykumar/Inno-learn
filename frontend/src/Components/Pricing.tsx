import React, { useEffect, useState } from "react";
import { Card, Typography, Button, Modal, message } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { ResponsiveAppBar } from "../HomePage";
import { useUserStore } from "../Zustand/useUserStore";
import { updatePricePlan } from "../Services/updatePricePlanService";
import { updatePayment } from "../Services/updatePayment";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function Pricing() {
  const navigate = useNavigate();
  const loggedUSer = useUserStore((s: any) => s.user);
  const [Standard, setStandard] = useState("Standard");
  const [Premium, setPremium] = useState("Premium");
  const [open, setOpen] = useState(false);
  const [clickedPlan, setClickedPlan] = useState("");
  const [utr, setUtr] = useState("");
  const loggedUser = useUserStore((s: any) => s.user);
  const setUser = useUserStore((s: any) => s.setUser);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  async function fetchData() {
    try {
      const updatedPlan = await updatePricePlan(
        loggedUser[0].id,
        clickedPlan,
        utr
      );

      const updatedPayment = await updatePayment(
        loggedUser[0].id,
        clickedPlan,
        utr
      );

      setUser(updatedPlan);
      navigate("/login");
      message.success("Plan updated successfully");
      message.error("please login again for security purpose");
    } catch (error) {
      console.error("Error updating plan:", error);
    }
  }

  return (
    <Box>
      <ResponsiveAppBar />
      <Typography.Title level={4} style={{ textAlign: "center", marginTop: 5 }}>
        Membership plans
      </Typography.Title>
      <Box style={{ display: "flex", marginTop: 20, flexWrap: "wrap" }}>
        <Box>
          <Box key={0} style={{ width: 300, margin: 20 }}>
            <Meta title={Standard} />

            <Typography style={{ marginTop: 10 }}>
              <CheckOutlined /> Access to all core learning materials and
              resource
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              <CheckOutlined />
              Basic support services included for smooth implementation.
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              <CheckOutlined />
              Customizable options available to tailor to specific needs
            </Typography>
            <Typography style={{ marginTop: 10 }}>$120/year</Typography>
            <Button
              style={{ marginTop: 10 }}
              onClick={() => {
                setClickedPlan(Standard);
                handleOpen();
              }}
              disabled={loggedUSer[0].membership == Standard}
            >
              Select
            </Button>
            <Modal
              open={open}
              onCancel={handleClose}
              title="Phonepe Scanner and upi"
              footer={null}
            >
              <img
                src="./scanner.jpeg"
                alt="scanner"
                style={{ width: "100%" }}
              />
              <Typography.Title
                level={3}
                style={{ margin: 5, textAlign: "center" }}
              >
                UPI ID : vinaykumar340167@ybl
              </Typography.Title>
              <TextField
                type="text"
                required={true}
                label="UTR NO"
                value={utr}
                onChange={(e) => {
                  setUtr(e.target.value);
                }}
                style={{ marginBottom: 10 }}
              />
              <Button
                key={Standard}
                onClick={() => {
                  if (utr !== "") {
                    fetchData();
                  } else {
                    message.error("Please enter UTR number");
                  }
                }}
              >
                Update
              </Button>
            </Modal>
          </Box>
        </Box>
        <Box>
          <Box key={0} style={{ width: 300, margin: 20 }}>
            <Meta title={Premium} />

            <Typography style={{ marginTop: 10 }}>
              <CheckOutlined /> All features of Standard Package plus additional
              advanced modules.
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              <CheckOutlined /> Dedicated customer success manager for
              personalized assistance.
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              <CheckOutlined /> Priority access to new updates, features, and
              support resources.
            </Typography>

            <Typography style={{ marginTop: 10 }}>$235/year</Typography>
            <Button
              style={{ marginTop: 10 }}
              onClick={() => {
                setClickedPlan(Premium);
                handleOpen();
              }}
              disabled={loggedUSer[0].membership == Premium}
            >
              Select
            </Button>
            <Modal
              open={open}
              onCancel={handleClose}
              title="Phonepe Scanner and upi"
              footer={null}
            >
              <img
                src="../scanner.jpeg"
                alt="scanner"
                style={{ width: "100%" }}
              />
              <Typography.Title
                level={3}
                style={{ margin: 5, textAlign: "center" }}
              >
                UPI ID : vinaykumar340167@ybl
              </Typography.Title>
              <TextField
                type="text"
                required={true}
                label="UTR NO"
                value={utr}
                onChange={(e) => {
                  setUtr(e.target.value);
                }}
                style={{ marginBottom: 10 }}
              />
              <Button
                key={Premium}
                onClick={() => {
                  if (utr !== "") {
                    fetchData();
                  } else {
                    message.error("Please enter UTR number");
                  }
                }}
              >
                Update
              </Button>
            </Modal>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
