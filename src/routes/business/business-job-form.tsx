"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider, SliderTrack, SliderRange, SliderThumb } from '@radix-ui/react-slider';
export default function ProjectForm() {
    const [costRange, setCostRange] = React.useState([1000, 10000])

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Project</h2>
            <form className="space-y-8">
                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter project title" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="brief">Brief</Label>
                    <Textarea id="brief" placeholder="Enter project brief" rows={4} />
                </div>

                <div className="space-y-2">
                    <Label>Cost Range</Label>
                    <Slider
                        min={0}
                        max={20000}
                        step={100}
                        value={costRange}
                        onValueChange={setCostRange}

                    >
                        <SliderTrack>
                            <SliderRange />
                        </SliderTrack>
                        <SliderThumb />
                        <SliderThumb />
                    </Slider>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${costRange[0]}</span>
                        <span>${costRange[1]}</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="requirements">Hard Requirements (optional)</Label>
                    <Textarea id="requirements" placeholder="Enter hard requirements" rows={4} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select>
                        <SelectTrigger id="project-type">
                            <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="website-addon">Website addon/rebrand</SelectItem>
                            <SelectItem value="application">Application</SelectItem>
                            <SelectItem value="api">API</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </div>
    )
}