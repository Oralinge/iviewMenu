import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import article from '@/components/article.vue'
import comments from '@/components/comments.vue'
import report from '@/components/report.vue'
import test1 from '@/components/test.vue'

import addUser from '@/components/addUser.vue'
import active from '@/components/active.vue'

import addAndStart from '@/components/addAndStart.vue'
import activeAnalyze from '@/components/activeAnalyze.vue'

import oralinge from '@/components/oralinge.vue'
import code from '@/components/code.vue'
// import con from '@/components/con.vue'
import pro from '@/components/pro.vue'
import mer from '@/components/mer.vue'
import contract from '@/components/contract.vue'
import webpack from '@/components/webpack.vue'
import gulp from '@/components/gulp.vue'
import Whitelist from '@/components/Whitelist.vue'
import blacklist from '@/components/blacklist.vue'
import data from '@/components/data.vue'


import many from '@/views/many.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/article',
                name: 'article',
                component: article
            },
            {
                path: '/comments',
                name: 'comments',
                component: comments
            },
            {
                path: '/report',
                name: 'report',
                component: report
            },
            {
                path: '/test1',
                name: 'test1',
                component: test1
            },

            {
                path: '/addUser',
                name: 'addUser',
                component: addUser
            },
            {
                path: '/active',
                name: 'active',
                component: active
            },
            {
                path: '/addAndStart',
                name: 'addAndStart',
                component: addAndStart
            },
            {
                path: '/activeAnalyze',
                name: 'activeAnalyze',
                component: activeAnalyze
            }
        ]
    },
    {
        path: '/many',
        name: 'many',
        component: many,
        children: [
            {
                path: '/oralinge',
                name: 'oralinge',
                component: oralinge
            },
            {
                path: '/code',
                name: 'code',
                component: code
            },
            // {
            //     path: '/con',
            //     name: 'con',
            //     component: con
            // },
            {
                path: '/pro',
                name: 'pro',
                component: pro
            },

            {
                path: '/mer',
                name: 'mer',
                component: mer
            },
            {
                path: '/contract',
                name: 'contract',
                component: contract
            },
            {
                path: '/webpack',
                name: 'webpack',
                component: webpack
            },
            {
                path: '/gulp',
                name: 'gulp',
                component: gulp
            },
            {
                path: '/Whitelist',
                name: 'Whitelist',
                component: Whitelist
            },
            {
                path: '/blacklist',
                name: 'blacklist',
                component: blacklist
            },
            {
                path: '/data',
                name: 'data',
                component: data
            },

        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
