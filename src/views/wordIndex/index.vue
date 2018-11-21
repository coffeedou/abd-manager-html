<template>
    <!--<div class="app-wrapper">-->
        <el-container>
            <el-header>
                <!--<el-input placeholder="请输入内容" v-model="word" @keyup.enter="search" clearable> </el-input>-->
            </el-header>
            <el-main>
                <canvas id="lineChart1" height="50"></canvas>
                <canvas id="lineChart2" height="50"></canvas>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    <!--</div>-->
</template>

<script>
    import Chart from 'chart.js';
    import axios from 'axios';

    export default {
        data() {
            return {
                word: '4g'
            }
        },
        // 初始化以后执行
        mounted() {
            axios.get('http://127.0.0.1:8080/abd/wordfrequency/word/' + this.word)
                .then(response => {
                    let result = response.data.data
                    let labels = Object.keys(result)
                    let values = Object.values(result);

                    var myChart1 = new Chart("lineChart1", {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'My First dataset',
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: values,
                                fill: false,
                            }]
                        }
                    });
                })
                .catch(error => console.log(error))

            axios.get('http://127.0.0.1:8080/abd/wordfrequency/topic/' + this.word)
                .then(response => {
                    let result = response.data.data
                    let labels = Object.keys(result)
                    let values = Object.values(result);

                    var myChart2 = new Chart("lineChart2", {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'My First dataset',
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: values,
                                fill: false,
                            }]
                        }
                    });
                })
                .catch(error => console.log(error))


        },

        methods: {

        }
    }
</script>

<style scoped>
    .el-container {
        height: 100%;
    }
    /*.app-wrapper {*/
        /*position: relative;*/
        /*height: 100%;*/
        /*width: 100%;*/
    /*}*/
</style>
