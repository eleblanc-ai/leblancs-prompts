<script>
    import { Timeline, TimelineItem } from 'flowbite-svelte';
    import { BriefcaseSolid, UserSolid} from 'flowbite-svelte-icons';
</script>
<div id="bio-timeline" class="pt-7">
    <h5 class="text-lg font-bold text-center text-gray-900 bg-green-300 dark:text-white mb-10 shadow z-0">Prompting Experience</h5>

    <div class="pl-3 -z-50">
        <Timeline class="-z-50" order="vertical">
        <TimelineItem title="ThinkCERCA - AI Product Lead" date="August 2024-present · Full Time" classLi="mb-2" classH3="text-md">
                                <svelte:fragment slot="icon">
                                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                                    <BriefcaseSolid class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                                    </span>
                                </svelte:fragment>
                                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leading the design and development of AI products to support student learning outcomes. Collaborating across teams to align AI initiatives with strategic goals, ensuring quality, scalability, and effective execution. Driving communication and project tracking to deliver impactful AI solutions across the organization.
        </p>
                            </TimelineItem>
        <TimelineItem title="ThinkCERCA - Prompt Engineer" date="April 2024-July 2024 · Contract" classLi="mb-2" classH3="text-md">
                        <svelte:fragment slot="icon">
                            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                            <BriefcaseSolid class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                            </span>
                        </svelte:fragment>
                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Developing LLM prompting techniques for automated writing feedback, systematically evaluating prompt performance, providing support to understand prompt engineering best practices. 
</p>
                    </TimelineItem>
            <TimelineItem title="Remotasks" date="June 2023-present · Contract" classLi="mb-2" classH3="text-md">
                <svelte:fragment slot="icon">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                    <BriefcaseSolid class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                    </span>
                </svelte:fragment>
                <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">Helping train generative AI models in math, science and coding. Continuation of work with Scale AI.</p>
            </TimelineItem>
    
            <TimelineItem title="Scale AI" date="March 2023-June 2023 · Contract" classLi="mb-2" classH3="text-md">
                <svelte:fragment slot="icon">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                    <BriefcaseSolid class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                    </span>
                </svelte:fragment>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Helping train generative AI models primarily in math, science and coding. Duties include prompt engineering, data review, and evaluation.</p>
            </TimelineItem>
    
            <!--<TimelineItem title="Independent research" date="April 2022-present" classLi="mb-2" classH3="text-md">
                <svelte:fragment slot="icon">
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                    <UserSolid class="w-3 h-3 text-primary-600 dark:text-primary-400" />
                    </span>
                </svelte:fragment>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leveraging ChatGPT, DALL·E, and Claude for independent research, development, and visual art.</p>
            </TimelineItem>-->
        </Timeline>

        

        <!-- <div id="timeline-legend" class="w-full sm:w-1/2 md:w-2/3 mt-6 flex flex-row-2">
            <div class="relative mb-2 basis-1/3">
                    <span class="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900 flex justify-center items-center">
                        <BriefcaseSolid class="w-3 h-3 text-primary-500 dark:text-primary-400" />
                    </span>
                    <p class="text-sm font-normal text-gray-400 dark:text-gray-400 pl-5 flex items-center">
                        Contract
                    </p>
            </div>
            
            <div class="relative mb-2 basis-2/3">
                <span class="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900 flex justify-center items-center">
                    <UserSolid class="w-3 h-3 text-primary-500 dark:text-primary-400" />
                </span>
                <p class="text-sm font-normal text-gray-400 dark:text-gray-400 pl-5 flex items-center">
                    Independent
                </p>
            </div> 
        </div> -->
    </div>
 
</div>
