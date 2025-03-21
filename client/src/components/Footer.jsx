import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Ticket,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Send,
} from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5, transition: { type: "spring", stiffness: 300 } },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Top wave separator */}
      <div className="relative">
        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Ticket className="h-8 w-8 text-purple-300" />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
                EventTix
              </h2>
            </motion.div>
            <p className="text-purple-200 max-w-xs">
              Your premier destination for booking tickets to the most exciting events around the world.
            </p>
            <div className="space-y-2">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Phone className="h-4 w-4 text-purple-300" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="h-4 w-4 text-purple-300" />
                <span className="text-sm">contact@eventtix.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="h-4 w-4 text-purple-300" />
                <span className="text-sm">123 Event Avenue, New York, NY</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Events", "Venues", "Artists", "Pricing", "FAQ"].map((item) => (
                <motion.li key={item} initial="initial" whileHover="hover">
                  <a href={`/${item.toLowerCase()}`} className="flex items-center group">
                    <motion.span variants={linkVariants} className="text-purple-200 hover:text-white transition-colors">
                      {item}
                    </motion.span>
                    <motion.span
                      variants={linkVariants}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Categories */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Categories</h3>
            <ul className="space-y-2">
              {[
                { name: "Concerts", icon: <Calendar className="h-4 w-4" /> },
                { name: "Festivals", icon: <Calendar className="h-4 w-4" /> },
                { name: "Sports", icon: <Calendar className="h-4 w-4" /> },
                { name: "Theater", icon: <Calendar className="h-4 w-4" /> },
                { name: "Comedy", icon: <Calendar className="h-4 w-4" /> },
                { name: "Exhibitions", icon: <Calendar className="h-4 w-4" /> },
              ].map((item) => (
                <motion.li key={item.name} initial="initial" whileHover="hover">
                  <a href={`/category/${item.name.toLowerCase()}`} className="flex items-center group">
                    <motion.div variants={iconVariants} className="mr-2 text-purple-300">
                      {item.icon}
                    </motion.div>
                    <motion.span variants={linkVariants} className="text-purple-200 hover:text-white transition-colors">
                      {item.name}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-purple-200 text-sm">
              Subscribe to our newsletter for exclusive offers and updates on new events.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md bg-white/10 border border-purple-500/30 text-white placeholder:text-purple-200/70 pr-10 py-2 px-3"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-8 bg-purple-600 hover:bg-purple-500 rounded-md p-2"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-300 text-xs"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>

            {/* Social Media */}
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook className="h-5 w-5" />, color: "bg-blue-600" },
                  { icon: <Twitter className="h-5 w-5" />, color: "bg-sky-500" },
                  { icon: <Instagram className="h-5 w-5" />, color: "bg-pink-600" },
                  { icon: <Youtube className="h-5 w-5" />, color: "bg-red-600" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`${item.color} p-2 rounded-full flex items-center justify-center hover:ring-2 hover:ring-white/30 transition-all`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-200"
        >
          <p>© {new Date().getFullYear()} EventTix. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;