"use client";

import Link from "next/link";
import { forwardRef } from "react";
import styles from "./button.module.css";

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    type = "button",
    href,
    external = false,
    disabled = false,
    loading = false,
    fullWidth = false,
    iconLeft = null,
    iconRight = null,
    onClick,
    className = "",
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;

  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth ? styles["btn--full"] : "",
    loading ? styles["btn--loading"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {!loading && iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {!loading && iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if (href && !isDisabled) {
    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {content}
    </button>
  );
});
