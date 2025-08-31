import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Email, Send, Person, Message } from "@mui/icons-material";
import { motion } from "framer-motion";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTheme } from "@mui/material/styles";
import { useNotification } from "./Notification";
import CircularComponent from "./CircularComponent";
export default function Contact() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [loading, setLoading] = useState(false);

  const {
    setSuccessNotification,
    setErrorNotification,
    setWarningNotification,
  } = useNotification();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
    let error = "";

    if (field === "phone") {
      if (!value || !isValidPhoneNumber(value)) {
        error = "Please enter a valid phone number.";
      }
    } else if (field === "message") {
      if (!value || value.trim().length < 10) {
        error = "Message must be at least 10 characters long.";
      }
    } else if (!value) {
      error = "This field is required.";
    }

    setFormErrors({ ...formErrors, [field]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let errors = {};
    if (!formValues.name) errors.name = "Name is required.";
    if (!formValues.email) errors.email = "Email is required.";
    if (!formValues.phone || !isValidPhoneNumber(formValues.phone))
      errors.phone = "Please enter a valid phone number.";
    if (!formValues.message || formValues.message.trim().length < 10)
      errors.message = "Message must be at least 10 characters long.";

    setFormErrors(errors);

    if (Object.values(errors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSuccessNotification("Message sent successfully!");
      setFormValues({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrorNotification("Something went wrong! Please try again.");
      //console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const gradientClasses =
    theme.palette.mode === "dark"
      ? "bg-gradient-to-r from-gray-50 to-purple-100"
      : "bg-gradient-to-r from-blue-400 to-purple-600";

  return (
    <Box id="contact" className="relative py-20 overflow-hidden z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <Typography
            variant="h3"
            className={`font-extrabold bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent text-center mb-12`}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="hidden md:block">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              src="/Contact info.png"
              alt="Contact"
              className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`max-w-md p-8 rounded-2xl md:w-full w-80 shadow-xl transition-all space-y-6 mx-auto md:mx-0 text-left ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <TextField
              fullWidth
              label="Full Name"
              value={formValues.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={Boolean(formErrors.name)}
              helperText={formErrors.name}
              InputProps={{
                startAdornment: <Person className="text-gray-400 mr-2" />,
              }}
              className="rounded-xl"
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formValues.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
              InputProps={{
                startAdornment: <Email className="text-gray-400 mr-2" />,
              }}
              className="rounded-xl"
            />

            <div className="space-y-1">
              <label
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Phone Number
              </label>
              <PhoneInput
                international
                defaultCountry="KE"
                value={formValues.phone}
                onChange={(value) => handleChange("phone", value)}
                className={`w-full py-3 px-4 rounded border outline-none ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-500 text-black"
                    : "bg-white border-gray-300 text-black"
                }`}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm">{formErrors.phone}</p>
              )}
            </div>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              value={formValues.message}
              onChange={(e) => handleChange("message", e.target.value)}
              error={Boolean(formErrors.message)}
              helperText={formErrors.message}
              InputProps={{
                startAdornment: <Message className="text-gray-400 mr-2 mt-2" />,
              }}
              className="rounded-xl"
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                endIcon={!loading ? <Send /> : ""}
                className="py-4 px-6  md:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
               hover:from-blue-700 hover:to-purple-700 text-lg font-semibold normal-case 
               shadow-lg hover:shadow-xl transition-all"
              >
                {loading ? <CircularComponent /> : "Send Message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </Box>
  );
}