import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

<motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/dashboard" className="btn-primary bg-white text-trainy-accent-blue hover:bg-gray-100">
              Get Started
            </Link>
            <Link href="/contact" className="px-6 py-2 rounded-lg border border-white text-white font-medium shadow-sm hover:bg-white hover:text-trainy-accent-blue transition-colors duration-200">
              Contact Support
            </Link>
          </motion.div> 