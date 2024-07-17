"use client";

import React, { useState } from "react";
import { Layout } from "antd";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/SortableItem";

const { Sider, Content } = Layout;

export default function Page() {
  const [items, setItems] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Layout>
          <Sider>
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </Sider>
          <Content>
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </Content>
        </Layout>
      </DndContext>
    </>
  );
}
