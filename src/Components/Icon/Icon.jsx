import React from 'react'
import {
  FontIcon,
  Avatar,
} from 'react-md';
import styles from './Icon.module.sass'

export const AllIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>list</FontIcon>
  </Avatar>
)

export const TechIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>computer</FontIcon>
  </Avatar>
)

export const ServicesIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>build</FontIcon>
  </Avatar>
)

export const OfficeIcon = (
  <Avatar className={styles.IconContainer}>
    <FontIcon className={styles.Icon}>folder</FontIcon>
  </Avatar>
)
