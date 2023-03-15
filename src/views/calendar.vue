<script lang="ts" setup>
import { ref, Ref } from 'vue';
import BottomNav from '../components/BottomNav.vue';
import { DateTime } from 'luxon'

const currentDate = DateTime.fromJSDate(new Date())
const daysInMonth = currentDate.daysInMonth
const startOfMonth = currentDate.startOf('month')
const startOfMonthDay = startOfMonth.day

</script>

<template>
    <div>
        <ul class="grid grid-rows-7 text-center mb-16">
            <li class="border-b-2 bg-white" v-for="day of daysInMonth">
                <div class="grid place-items-center p-3 font-bold text-xl sticky top-0 bg-inherit">
                    <h1>
                        {{ startOfMonth.plus({ day: day - 1 }).weekdayShort }}
                        {{ startOfMonth.plus({ days: day - 1 }).toJSDate().getDate() }}
                    </h1>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid molestias ab aliquam quidem atque et quis dolorum repellat vitae blanditiis voluptatem, ut amet, mollitia tenetur nam, facilis modi. Cum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores beatae repudiandae? Obcaecati, incidunt, minima illo molestias similique facilis necessitatibus itaque eius asperiores ratione accusamus, cumque reiciendis error exercitationem? Illum!
            </li>
        </ul>
    </div>
    <BottomNav />
</template>