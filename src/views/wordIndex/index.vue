<template>
    <!--<div class="app-wrapper">-->
        <el-container>
            <el-header>
                <el-input placeholder="请输入内容" v-model="word" clearable> </el-input>
            </el-header>
            <el-main>
                <canvas id="lineChart1" width="60%" height="40%"></canvas>
                <canvas id="lineChart2" width="60%" height="40%"></canvas>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    <!--</div>-->
</template>

<script>
    import Chart from 'chart.js';

    export default {
        data() {
            return {
                word: ''
            }
        },
        // 初始化以后执行
        mounted() {
            var myChart = new Chart("lineChart1", {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: [
                            // randomScalingFactor(),
                            // randomScalingFactor(),
                            // randomScalingFactor(),
                            // randomScalingFactor(),
                            // randomScalingFactor(),
                            // randomScalingFactor(),
                            // randomScalingFactor()
                        ],
                        fill: false,
                    }]
                }
            });

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
